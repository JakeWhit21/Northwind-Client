$(function () {
    // preload audio
    var toast = new Audio('toast.wav');
    $('.code').on('click', function (e) {
        e.preventDefault();
        // extract name
        const code = $(this).data('code');
        const name = $(this).data('name');
        // overwrite toast
        document.getElementById("code").innerHTML = code;
        document.getElementById("productName").innerHTML = name;
        // close on esc key press
        $(document).keyup(function (e) {
            if (e.key === "Escape") {
                $('#liveToast').toast('hide');
            }
        });
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');
    });
});

