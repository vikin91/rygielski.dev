document.addEventListener('DOMContentLoaded', function() {
    // Set initial width to 0
    var levelBars = document.querySelectorAll('.level-bar-inner');
    levelBars.forEach(function(bar) {
        bar.style.width = '0';
        bar.style.transition = 'width 0.8s ease-out';
    });

    // Animate to target level on window load
    window.addEventListener('load', function() {
        levelBars.forEach(function(bar) {
            var targetWidth = bar.getAttribute('data-level');
            bar.style.width = targetWidth;
        });
    });
});