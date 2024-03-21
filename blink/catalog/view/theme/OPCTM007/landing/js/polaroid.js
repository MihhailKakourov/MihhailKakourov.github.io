let canvas = new fabric.Canvas('canvas', {
    width: 360,
    height: 450,
    selection: false,
});

// Masks
let maskMale;
let maskFemale;

fabric.Image.fromURL(
  "catalog/view/theme/OPCTM007/landing/images/male.png",
  function (img) {
    maskMale = img;

    img.scaleToWidth(canvas.getWidth() - 40);

    let padding = (canvas.getWidth() - img.width * img.scaleX) / 2;

    img.set("left", padding);
    img.set("top", padding);
    img.set("selectable", false);
    img.set("evented", false);

    canvas.add(img);
  }
);

fabric.Image.fromURL(
  "catalog/view/theme/OPCTM007/landing/images/female.png",
  function (img) {
    maskFemale = img;

    img.scaleToWidth(canvas.getWidth() - 40);

    let padding = (canvas.getWidth() - img.width * img.scaleX) / 2;

    img.set("left", padding);
    img.set("top", padding);
    img.set("visible", false);
    img.set("selectable", false);
    img.set("evented", false);

    canvas.add(img);
  }
);

// Borders
const border = (width, height, top, left) => {
    return new fabric.Rect({
        width: width,
        height: height,
        top: top,
        left: left,
        fill: '#ffffff',
        selectable: false,
        evented: false,
    });
}

let borderLeft = border(22, canvas.getHeight(), 0, -1);
let borderTop = border(canvas.getWidth(), 22, -1, 0);
let borderRight = border(22, canvas.getHeight(), 0, canvas.getWidth() - 22);
let borderBottom = border(canvas.getWidth(), 62, canvas.getHeight() - 62, 0);

borderLeft.bringToFront();
borderTop.bringToFront();
borderRight.bringToFront();
borderBottom.bringToFront();

canvas.add(borderLeft);
canvas.add(borderTop);
canvas.add(borderRight);
canvas.add(borderBottom);

// Caption
let text = new fabric.Text("LET'S HANG OUT", {
    fontFamily: 'ReenieBeanie',
    fontSize: 40,
    fill: '#000000',
    selectable: false,
    evented: false,
});

text.set('left', (canvas.getWidth() - text.width) / 2);
text.set('top', canvas.getHeight() - text.height - 10);

canvas.add(text);

canvas.renderAll();

// Events
canvas.on('mouse:down', function(e) {
    let target = canvas.getActiveObject();

    if (image && image === target) image.set('opacity', .5);
});

canvas.on('selection:cleared', function() {
    if (image) {
        image.set('opacity', 1);
        canvas.sendToBack(image);
    }
});

// Uploaded image
let image;

$('input[type="file"]').on('change', function (e) {
    const file = e.target.files[0];
    let reader = new FileReader();

    if (file) {
        if (image) canvas.remove(image);

        reader.onload = function (e) {
            let data = e.target.result;

            fabric.Image.fromURL(data, function (img) {
                image = img;

                img.set('top', 0);
                img.set('left', 0);
                img.set('opacity', .5);

                if (img.width > canvas.getWidth() || img.height > canvas.getHeight()) {
                    img.scaleToWidth(canvas.getWidth() / 2);
                    img.scaleToHeight(canvas.getHeight() / 2);
                }

                canvas.add(img);
                canvas.setActiveObject(img);

                $('#canvas-upload-image').hide();
            });
        }

        reader.readAsDataURL(file);
    }
});

// Set caption
$('[data-toggle="caption"]').on('click', function (e) {
    e.preventDefault();

    text.set('text', $(this).text());
    text.set('left', (canvas.getWidth() - text.width) / 2 - 20);

    canvas.renderAll();
});

// Change mask
$('[data-toggle="mask"]').on('click', function (e) {
    e.preventDefault();

    maskMale.set('visible', $(this).data('target') === 'male');
    maskFemale.set('visible', $(this).data('target') === 'female');

    canvas.renderAll();

    $('[data-toggle="mask"]').removeClass('opacity-50');
    $(this).addClass('opacity-50');
});

// Download
$('.download').on('click', function (e) {
    if (! image) return false;

    this.href = canvas.toDataURL({
        format: 'png',
        quality: 1
    });

    this.download = Date.now() + '.png'
});

$(window).on('click', function (e) {
    let target = $(e.target);

    if (!target.is('canvas') || !target.closest('canvas')) {
        if (image) {
            image.set('opacity', 1);

            canvas.discardActiveObject();
            canvas.sendToBack(image);
        }
    }
});

$(window).on('load resize', function () {
    const canvasContainer = $('.canvas-wrap')[0];

    const ratio= canvas.getWidth() / canvas.getHeight();
    const containerWidth= canvasContainer.clientWidth;
    const scale= containerWidth / canvas.getWidth();
    const zoom= canvas.getZoom() * scale;

    canvas.setDimensions({
        width: containerWidth,
        height: containerWidth / ratio
    });

    canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
});

