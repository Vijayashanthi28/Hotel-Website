//Contact
const reservationForm = document.getElementById('reservationForm');
        const confirmationModal = document.getElementById('confirmationModal');

        reservationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const customerName = document.getElementById('customerName').value;
            const customerPhone = document.getElementById('customerPhone').value;
            const customerEmail = document.getElementById('customerEmail').value;
            const guestCount = document.getElementById('guestCount').value;

            // Validate form
            if (customerName && customerPhone && customerEmail && guestCount) {
                // Show confirmation modal
                showModal();
                
                // Reset form
                reservationForm.reset();
            }
        });

        function showModal() {
            confirmationModal.classList.add('active');
        }

        function closeModal() {
            confirmationModal.classList.remove('active');
        }

        // Close modal when clicking outside
        confirmationModal.addEventListener('click', function(event) {
            if (event.target === confirmationModal) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        //Gallery Filter
          const filterOptions = document.querySelectorAll('.filter-option');
        const galleryCards = document.querySelectorAll('.gallery-card');

        filterOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from all options
                filterOptions.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Get the filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter gallery items
                filterGalleryItems(filterValue);
            });
        });

        function filterGalleryItems(category) {
            galleryCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all') {
                    // Show all cards
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.animation = 'fadeIn 0.5s ease';
                    }, 100);
                } else {
                    // Show only matching cards
                    if (cardCategory === category) {
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.style.animation = 'fadeIn 0.5s ease';
                        }, 100);
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        }

        // Add CSS animation dynamically
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        `;
        document.head.appendChild(style);


        //Menu
         // Category Filter
        const categoryButtons = document.querySelectorAll('.category-btn');
        const menuCards = document.querySelectorAll('.menu-item-card');

        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                categoryButtons.forEach(btn => btn.classList.remove('active-category'));
                this.classList.add('active-category');
                
                const selectedCategory = this.getAttribute('data-category');
                filterMenuItems(selectedCategory);
            });
        });

        function filterMenuItems(category) {
            menuCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all') {
                    card.classList.remove('hidden-item');
                } else {
                    if (cardCategory === category) {
                        card.classList.remove('hidden-item');
                    } else {
                        card.classList.add('hidden-item');
                    }
                }
            });
        }

        // Add Button - Show Quantity Controls
        function showAddControls(button) {
            const actionDiv = button.parentElement;
            button.style.display = 'none';
            actionDiv.querySelector('.quantity-control').classList.add('visible');
        }

        // Increase Quantity
        function increaseQty(button) {
            const qtyDisplay = button.parentElement.querySelector('.qty-display');
            let currentQty = parseInt(qtyDisplay.textContent);
            qtyDisplay.textContent = currentQty + 1;
        }

        // Decrease Quantity
        function decreaseQty(button) {
            const qtyDisplay = button.parentElement.querySelector('.qty-display');
            const addBtn = button.closest('.item-actions').querySelector('.add-action-btn');
            const qtyControl = button.parentElement;
            
            let currentQty = parseInt(qtyDisplay.textContent);
            
            if (currentQty > 1) {
                qtyDisplay.textContent = currentQty - 1;
            } else {
                qtyControl.classList.remove('visible');
                addBtn.style.display = 'inline-block';
                qtyDisplay.textContent = 1;
            }
        }

        // Add to Cart
        const cartButtons = document.querySelectorAll('.cart-add-btn');
        cartButtons.forEach(button => {
            button.addEventListener('click', function() {
                showCartModal();
            });
        });

        function showCartModal() {
            document.getElementById('cartNotification').classList.add('show-modal');
        }

        function closeCartModal() {
            document.getElementById('cartNotification').classList.remove('show-modal');
        }

        // Place Order
        function placeOrder() {
            closeCartModal();
            document.getElementById('orderConfirmation').classList.add('show-modal');
        }

        function closeOrderModal() {
            document.getElementById('orderConfirmation').classList.remove('show-modal');
        }

        // Close modals on outside click
        document.querySelectorAll('.notification-modal').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('show-modal');
                }
            });
        });

        // Close modals with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                document.querySelectorAll('.notification-modal').forEach(modal => {
                    modal.classList.remove('show-modal');
                });
            }
        });
