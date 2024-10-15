// Mencegah klik kanan (right-click)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Mencegah kombinasi tombol Ctrl+C (Copy) dan Cmd+C di MacOS (Safari)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }

    // Mencegah kombinasi tombol Ctrl+X (Cut) dan Cmd+X di MacOS (Safari)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'x' || e.key === 'X')) {
        e.preventDefault();
    }

    // Mencegah kombinasi tombol Ctrl+V (Paste) dan Cmd+V di MacOS (Safari)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'v' || e.key === 'V')) {
        e.preventDefault();
    }

    // Mencegah shortcut seperti F12, Ctrl+Shift+I, Ctrl+Shift+C di semua browser, termasuk Safari
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'c' || e.key === 'j')) || (e.ctrlKey && e.key === 'u')) {
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


        // Mencegah klik kanan (right-click)
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // Mencegah kombinasi tombol Ctrl+C (Copy)
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
                e.preventDefault();
            }
        });

        // Mencegah kombinasi tombol Ctrl+X (Cut)
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && (e.key === 'x' || e.key === 'X')) {
                e.preventDefault();
            }
        });

        // Mencegah kombinasi tombol Ctrl+V (Paste)
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && (e.key === 'v' || e.key === 'V')) {
                e.preventDefault();
            }
        });

        // Mencegah menyorot (highlight) teks dengan mouse
        document.addEventListener('mousedown', function(e) {
            if (e.detail > 1) {
                e.preventDefault();
            }
        });

        // Mencegah menyorot (highlight) teks dengan keyboard
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
        });

        // Mencegah shortcut seperti F12, Ctrl+Shift+I, Ctrl+Shift+C
document.addEventListener('keydown', function(e) {
    // Cegah F12 (untuk membuka DevTools)
    if (e.key === 'F12') {
        e.preventDefault();
    }

    // Cegah Ctrl+Shift+I (untuk membuka DevTools di Chrome)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
    }

    // Cegah Ctrl+Shift+C (untuk inspect element di Chrome)
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
    }

    // Cegah Ctrl+Shift+J (untuk membuka console di Chrome)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
    }
    
    // Cegah Ctrl+U (untuk melihat sumber halaman)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
    }
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
