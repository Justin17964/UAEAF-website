// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Discord Button Functionality
document.querySelectorAll('.discord-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your actual Discord invite link
        const discordInviteLink = 'https://discord.gg/your-invite-code';
        window.open(discordInviteLink, '_blank');
    });
});

// Join Now Button Functionality
document.querySelectorAll('.btn.primary').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.textContent === 'Join Now') {
            e.preventDefault();
            // Replace with your actual Discord invite link
            const discordInviteLink = 'https://discord.gg/your-invite-code';
            window.open(discordInviteLink, '_blank');
        }
    });
});

// Discord Server Status Widget (if you have a status API)
function updateDiscordStatus() {
    // This would require a backend server to fetch Discord server status
    // Example implementation:
    /*
    fetch('/api/discord/status')
        .then(response => response.json())
        .then(data => {
            const statusElement = document.querySelector('.discord-status');
            if (statusElement) {
                statusElement.innerHTML = `
                    <div class="status-indicator ${data.online ? 'online' : 'offline'}"></div>
                    <span>${data.memberCount} members online</span>
                `;
            }
        })
        .catch(error => console.error('Error fetching Discord status:', error));
    */
    
    // Enhanced Discord status with interactive elements
    const statusElement = document.querySelector('.discord-status');
    if (statusElement) {
        statusElement.innerHTML = `
            <div class="discord-widget">
                <div class="widget-header">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Discord%20logo%20with%20purple%20background&image_size=square" alt="Discord" width="24" height="24">
                    <h4>UAE Armed Forces Discord</h4>
                </div>
                <div class="widget-content">
                    <div class="status-indicator online"></div>
                    <span class="status-text">Server Online</span>
                    <div class="server-stats">
                        <div class="stat">
                            <span class="stat-label">Members</span>
                            <span class="stat-value">100+</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Channels</span>
                            <span class="stat-value">25+</span>
                        </div>
                    </div>
                    <a href="https://discord.gg/your-invite-code" class="widget-btn" target="_blank">Join Server</a>
                </div>
            </div>
        `;
    }
}

// Call the function to update Discord status
updateDiscordStatus();

// Refresh Discord status every 5 minutes
setInterval(updateDiscordStatus, 300000);

// Discord Embed Preview for Links
function createDiscordEmbedPreview() {
    const discordLinks = document.querySelectorAll('a[href*="discord.gg"]');
    
    discordLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // Create embed preview
            const preview = document.createElement('div');
            preview.classList.add('discord-embed-preview');
            preview.innerHTML = `
                <div class="embed-header">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Discord%20logo%20with%20purple%20background&image_size=square" alt="Discord" width="24" height="24">
                    <span>Join our Discord Server</span>
                </div>
                <div class="embed-body">
                    <p>Click to join our UAE Armed Forces community on Discord!</p>
                </div>
            `;
            
            // Position the preview
            const rect = link.getBoundingClientRect();
            preview.style.position = 'absolute';
            preview.style.left = rect.left + 'px';
            preview.style.top = rect.bottom + 10 + 'px';
            preview.style.zIndex = '1000';
            
            document.body.appendChild(preview);
            
            // Store preview reference
            link._preview = preview;
        });
        
        link.addEventListener('mouseleave', function() {
            if (link._preview) {
                document.body.removeChild(link._preview);
                link._preview = null;
            }
        });
    });
}

// Call the function to create Discord embed previews
createDiscordEmbedPreview();

// Mobile Menu Toggle (if needed in the future)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('mobile-active');
}

// Scroll Animation for Elements
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.about, .features, .events');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Event Listeners
window.addEventListener('scroll', handleScrollAnimations);

// Initialize Animations on Load
window.addEventListener('load', function() {
    handleScrollAnimations();
    
    // Add a slight delay to allow content to load
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Form Handling (if needed in the future)
function handleFormSubmission(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        const successMessage = form.querySelector('.success-message');
        if (successMessage) {
            successMessage.style.display = 'block';
        }
        
        // Reset form
        form.reset();
    });
}

// Example: If you have a contact form
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    handleFormSubmission(contactForm);
}

// Discord Integration: Fetch server members count (requires Discord API setup)
async function fetchDiscordServerInfo() {
    // This would require a backend server to handle the Discord API request
    // as Discord doesn't allow direct client-side API calls
    try {
        // Example API endpoint (you would need to implement this)
        // const response = await fetch('/api/discord/server-info');
        // const data = await response.json();
        // document.querySelector('.member-count').textContent = data.memberCount;
        
        // For now, we'll just use a placeholder
        console.log('Discord server info would be fetched here');
    } catch (error) {
        console.error('Error fetching Discord server info:', error);
    }
}

// Call the function if needed
// fetchDiscordServerInfo();

// Modal Functionality (if needed in the future)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Preloader Animation (if needed)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

// Responsive Navbar Handling
function handleResponsiveNavbar() {
    const navbar = document.querySelector('nav ul');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }
}

// Call the function if you have a mobile menu toggle
// handleResponsiveNavbar();

// Dark Mode Toggle (if needed in the future)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Load saved dark mode preference
function loadDarkModePreference() {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Call the function if you have dark mode
// loadDarkModePreference();

// Custom Cursor Effects (if desired)
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    window.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effects for links
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
        });
    });
}

// Call the function if you want a custom cursor
// initCustomCursor();

// Performance Optimization: Lazy Loading Images
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(function(image) {
            imageObserver.observe(image);
        });
    } else {
        // Fallback for older browsers
        lazyImages.forEach(function(image) {
            image.src = image.dataset.src;
            image.classList.remove('lazy');
        });
    }
}

// Call the function if you have lazy-loaded images
// initLazyLoading();

// Error Handling for Images
function handleImageErrors() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            // Set a fallback image or hide the broken image
            this.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
            this.alt = 'Image not available';
        });
    });
}

// Call the function to handle image errors
handleImageErrors();

// Authentication Functionality
function initAuth() {
    // Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authTabs = document.querySelectorAll('.auth-tab');
    const switchTabs = document.querySelectorAll('.switch-tab');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Remove active class from all tabs and buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            authTabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to current tab and button
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    switchTabs.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.dataset.target;
            
            // Remove active class from all tabs and buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            authTabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to target tab and button
            document.querySelector(`.tab-btn[data-tab="${targetTab}"]`).classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Login Form Handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const rememberMe = document.getElementById('remember-me').checked;
            
            // Get users from local storage
            const users = JSON.parse(localStorage.getItem('uaeaf_users') || '[]');
            
            // Find user
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                // Save user session
                const session = {
                    userId: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                    discord: user.discord
                };
                
                if (rememberMe) {
                    localStorage.setItem('uaeaf_session', JSON.stringify(session));
                } else {
                    sessionStorage.setItem('uaeaf_session', JSON.stringify(session));
                }
                
                // Show success message
                showAuthMessage('Login successful! Redirecting...', 'success');
                
                // Redirect to home page
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                showAuthMessage('Invalid email or password', 'error');
            }
        });
    }
    
    // Register Form Handling
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('register-firstname').value;
            const lastName = document.getElementById('register-lastname').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            const discord = document.getElementById('register-discord').value;
            const role = document.getElementById('register-role').value;
            
            // Validate passwords
            if (password !== confirmPassword) {
                showAuthMessage('Passwords do not match', 'error');
                return;
            }
            
            // Get users from local storage
            const users = JSON.parse(localStorage.getItem('uaeaf_users') || '[]');
            
            // Check if user already exists
            if (users.some(u => u.email === email)) {
                showAuthMessage('Email already registered', 'error');
                return;
            }
            
            // Create new user
            const newUser = {
                id: Date.now().toString(),
                firstName,
                lastName,
                email,
                password,
                discord,
                role,
                createdAt: new Date().toISOString()
            };
            
            // Add user to storage
            users.push(newUser);
            localStorage.setItem('uaeaf_users', JSON.stringify(users));
            
            // Show success message
            showAuthMessage('Registration successful! Please login.', 'success');
            
            // Switch to login tab
            tabBtns.forEach(b => b.classList.remove('active'));
            authTabs.forEach(tab => tab.classList.remove('active'));
            document.querySelector('.tab-btn[data-tab="login"]').classList.add('active');
            document.getElementById('login').classList.add('active');
            
            // Reset form
            registerForm.reset();
        });
    }
    
    // Forgot Password Handling
    const forgotPasswordLink = document.querySelector('.forgot-password');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = prompt('Enter your email to reset password:');
            if (email) {
                // Get users from local storage
                const users = JSON.parse(localStorage.getItem('uaeaf_users') || '[]');
                
                // Find user
                const user = users.find(u => u.email === email);
                
                if (user) {
                    showAuthMessage('Password reset instructions sent to your email', 'success');
                } else {
                    showAuthMessage('Email not found', 'error');
                }
            }
        });
    }
}

// Show Auth Message
function showAuthMessage(message, type) {
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `auth-message ${type}`;
    messageElement.textContent = message;
    
    // Add to auth container
    const authContainer = document.querySelector('.auth-container');
    if (authContainer) {
        authContainer.appendChild(messageElement);
        
        // Remove after 3 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }
}

// Check User Session
function checkUserSession() {
    const session = localStorage.getItem('uaeaf_session') || sessionStorage.getItem('uaeaf_session');
    return session ? JSON.parse(session) : null;
}

// Update Navigation Based on Session
function updateNavigation() {
    const session = checkUserSession();
    const authBtn = document.querySelector('.auth-btn');
    
    if (authBtn) {
        if (session) {
            authBtn.textContent = `Welcome, ${session.firstName}`;
            authBtn.href = '#';
            authBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (confirm('Logout?')) {
                    localStorage.removeItem('uaeaf_session');
                    sessionStorage.removeItem('uaeaf_session');
                    window.location.reload();
                }
            });
        } else {
            authBtn.textContent = 'Login/Register';
            authBtn.href = 'auth.html';
        }
    }
}

// Call authentication functions
if (document.querySelector('.auth')) {
    initAuth();
}

// Check session on every page
updateNavigation();

// Analytics Tracking (if needed)
function trackEvent(category, action, label) {
    // Example analytics tracking
    console.log('Event tracked:', { category, action, label });
    
    // If using Google Analytics or similar
    // ga('send', 'event', category, action, label);
}

// Example: Track Discord button clicks
document.querySelectorAll('.discord-btn').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('Button', 'Click', 'Discord Join');
    });
});

// Example: Track page views
function trackPageView() {
    const pageTitle = document.title;
    const pageUrl = window.location.href;
    
    console.log('Page view tracked:', { pageTitle, pageUrl });
    
    // If using Google Analytics or similar
    // ga('send', 'pageview', pageUrl);
}

// Track page view on load
trackPageView();