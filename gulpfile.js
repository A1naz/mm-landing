const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const del = require("del");
const browserSync = require("browser-sync").create();

const fileinclude = require('gulp-file-include');
//
const gcmq = require('gulp-group-css-media-queries');

const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const svgmin = require('gulp-svgmin');

//
function browsersync() {
  browserSync.init({
    server: {
      baseDir: "build/",
    },
    notify: false,
  });
}

function html() {
	return src('src/[^_]*.html')
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(dest('build/'))
		.pipe(browserSync.stream());
}

function styles() {
  return src("src/css/styles.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(gcmq())
    .pipe(concat("main.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 versions"],
        grid: true,
      })
    )
    .pipe(dest("build/assets/css"))
    .pipe(browserSync.stream());
}

function plaginStyles() {
	return src([
		// './src/scripts/plugins/fancybox3/jquery.fancybox.min.css',
		// './src/scripts/plugins/fancybox4/fancybox.css',
		'./src/scripts/plugins/magnific/magnific-popup.css',
		'./src/scripts/plugins/niceSelect/nice-select.css',
		// './src/scripts/plugins/swiper/swiper-bundle.min.css',
		'./src/scripts/plugins/swiper11/swiper-bundle.min.css',
		// './src/scripts/plugins/wow/animate.min.css',
		// './src/scripts/plugins/simplebar/simplebar.css',
		// './src/scripts/plugins/nouislider/nouislider.min.css',
	])

		.pipe(concat('plugins.min.css'))
		.pipe(dest('./build/assets/css'));
}

function scripts() {
  return src([
    './src/scripts/main.js',
  ])

  .pipe(concat('main.js'))
  .pipe(dest('./build/assets/js'))
  .pipe(browserSync.stream());
}

function json() {
	return src([
	  './src/scripts/price.js',
	])

	.pipe(dest('./build/assets/js'))
	.pipe(browserSync.stream());
 }

function plaginScripts() {
	return src([
		'./src/scripts/plugins/jquery-3.6.4.min.js',
		// './src/scripts/plugins/fancybox3/jquery.fancybox.min.js',
		// './src/scripts/plugins/fancybox4/fancybox.umd.js',
		// './src/scripts/plugins/jquery.validate/jquery.validate.min.js',
		'./src/scripts/plugins/magnific/jquery.magnific-popup.min.js',
		'./src/scripts/plugins/mask/mask.js',
		'./src/scripts/plugins/niceSelect/jquery.nice-select.min.js',
		// './src/scripts/plugins/readmore/readmore.min.js',
		// './src/scripts/plugins/swiper/swiper-bundle.min.js',
		'./src/scripts/plugins/swiper11/swiper-bundle.min.js',
		// './src/scripts/plugins/wow/wow.min.js',
		// './src/scripts/plugins/simplebar/simplebar.js',
		// './src/scripts/plugins/lazyload/jquery.lazy.min.js',
		// './src/scripts/plugins/nouislider/nouislider.min.js',
	])

		.pipe(concat('plugins.min.js'))
		.pipe(uglify())
		.pipe(dest('./build/assets/js'))
}

function images() {
  return src("src/img/**/*.{jpg,png,svg,mp4,gif,webp,ico}")
    .pipe(dest("build/assets/img"));
}

function svg() {
	return src('src/img/*.svg').pipe(dest('build/assets/img/'));
}

function createSvgSprite() {
	return src('src/img/svg/*.svg')
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: { xmlMode: true }
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: "../sprite.svg"
				}
			},
		}))
		.pipe(dest('build/assets/img'));
}

function php() {
	// return src('src/scripts/plugins/phpmailer/**/*').pipe(dest('build/assets/php/phpmailer'));
}

function fonts() {
	return src('src/fonts/**/*').pipe(dest('build/assets/fonts/'));
}

function cleanDist() {
  return del("build");
}

function clear() {
	return del('build/*');
}

function watching() {
  watch(["src/css/**/*.scss"], styles);
  watch(["./src/img/*.svg"], svg);
  watch(["./src/img/svg/*.svg"], createSvgSprite);
  watch(["src/img/**/*.{jpg,png,svg,mp4,gif,webp}"], images);
  watch(["src/scripts/**/*.js", "!src/scripts/main.min.js"], scripts);
  watch(["src/**/*.html"]).on("change", html);
  watch(["src/**/*.html"]).on("change", browserSync.reload);
  watch(["src/fonts/**/*.woff2"], fonts);

  watch(["src/scripts/plugins/phpmailer/*.php"], php);
  watch(["./src/scripts/price.js"], json);
}

exports.html = html;

exports.styles = styles;
exports.plaginStyles = plaginStyles;

exports.scripts = scripts;
exports.plaginScripts = plaginScripts;

exports.json = json;

exports.php = php;
exports.fonts = fonts;

exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;

exports.clear = clear;

exports.svg = svg;
exports.createSvgSprite = createSvgSprite;

exports.build = series(clear, images, html);

exports.default = series(clear, parallel(styles, scripts, json, browsersync, watching, html, images, plaginStyles, plaginScripts, php, fonts, svg, createSvgSprite));
