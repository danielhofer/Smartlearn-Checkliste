




document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-link');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
        // Alle Tabs und Panes zurücksetzen
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        // Aktive Klasse setzen
        tab.classList.add('active');
        panes[index].classList.add('active');
        });
    });

    // Arrows über event-delegation, sonst ist das Zeugs nicht sauber geladen
    document.body.addEventListener('click', (e) => {
        if (e.target.matches("button.arrow")){
            const btn = e.target;
            const item = btn.closest(".checklist-item");
            const details = item.querySelector(".details");
            const isOpen = !details.classList.contains("hidden");
            
            details.classList.toggle("hidden", isOpen);
            btn.setAttribute("aria-expanded", String(!isOpen));

        } else if (e.target.matches("button.entscheid")) {
            btn = e.target;
            btn.classList.add("active");
            const classToShow = btn.dataset.branch;
            const classToHide = btn.dataset.other;
            console.log(classToShow);
            document.querySelectorAll(`.block.${classToShow}`).forEach(el => {
                el.classList.remove('hidden');
            });
            document.querySelectorAll(`.entscheid.${classToShow}`).forEach(el => {
                el.classList.add('active');
            });
            document.querySelectorAll(`.block.${classToHide}`).forEach(el => {
                el.classList.add('hidden');
            });
            document.querySelectorAll(`.entscheid.${classToHide}`).forEach(el => {
                el.classList.remove('active');
            });
        }
    });

});



