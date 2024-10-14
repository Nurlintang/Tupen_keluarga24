// Mencegah klik kanan (right-click)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Mencegah kombinasi tombol Ctrl+C, Cmd+C di iOS dan desktop
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }

    // Mencegah kombinasi tombol Ctrl+X, Cmd+X
    if ((e.ctrlKey || e.metaKey) && (e.key === 'x' || e.key === 'X')) {
        e.preventDefault();
    }

    // Mencegah kombinasi tombol Ctrl+V, Cmd+V
    if ((e.ctrlKey || e.metaKey) && (e.key === 'v' || e.key === 'V')) {
        e.preventDefault();
    }

    // Mencegah shortcut seperti F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) || (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});

// Mencegah menyorot (highlight) teks dengan mouse dan keyboard
document.addEventListener('mousedown', function(e) {
    if (e.detail > 1) {
        e.preventDefault();
    }
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Mencegah Copy, Cut, Paste melalui event onbeforecopy, onbeforecut, onbeforepaste
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

document.addEventListener('cut', function(e) {
    e.preventDefault();
});

document.addEventListener('paste', function(e) {
    e.preventDefault();
});

// Deteksi jika DevTools terbuka dengan cara mendeteksi perubahan ukuran viewport
(function() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            document.body.innerHTML = 'Inspecting is disabled!';
            throw new Error('DevTools is open');
        }
    });
    console.log(element);
})();

// Deteksi jika DevTools terbuka dengan event resize
window.addEventListener('resize', function() {
    const devToolsWidth = window.outerWidth - window.innerWidth > 100;  // Menyaring jika DevTools terbuka
    if (devToolsWidth) {
        document.body.innerHTML = 'Inspecting is disabled!';
        throw new Error('DevTools is open');
    }
});

// Mencegah gesture sentuh pada layar iPhone dan perangkat mobile
document.addEventListener('touchstart', function(e) {
    e.preventDefault();
}, { passive: false });

// Mencegah zoom dan pinch di perangkat mobile
document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
});

// Mencegah zoom dan pinch pada iPhone dan perangkat mobile lainnya
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });

// Menghindari zoom dengan menonaktifkan pinching zoom pada perangkat mobile
if (window.matchMedia('(pointer: coarse)').matches) {
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
}

// Memperketat deteksi untuk pembukaan DevTools di perangkat mobile
(function() {
    const checkDevTools = () => {
        const threshold = 100;  // Batas perubahan ukuran jendela untuk mendeteksi DevTools terbuka
        const width = window.innerWidth;
        const height = window.innerHeight;
        const ratio = width / height;

        if (width < 500 || (ratio < 0.5 && width > height)) {
            document.body.innerHTML = 'Inspecting is disabled!';
            throw new Error('DevTools is open');
        }
    };

    window.addEventListener('resize', checkDevTools);
    window.addEventListener('orientationchange', checkDevTools);
})();

// Cegah zooming pada iOS
if (typeof document !== 'undefined') {
    const metaTag = document.createElement('meta');
    metaTag.name = "viewport";
    metaTag.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
    document.getElementsByTagName('head')[0].appendChild(metaTag);
}
