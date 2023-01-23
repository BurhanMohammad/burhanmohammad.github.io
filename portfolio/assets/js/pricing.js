"use strict";

/* ======= responsive pricing table ======== */

const pricingTabs = document.querySelectorAll('#pricing-tabs .pricing-tab');
const pricingTable = document.querySelector('#pricing-table');
const pricingDataCells = pricingTable.querySelectorAll('.pricing-data');

pricingTabs.forEach((pricingTab) => {

    pricingTab.addEventListener('click', (e) => {

        e.preventDefault();

        for (let siblingTab of pricingTab.parentNode.children) {
            siblingTab.classList.remove('active');
        }

        pricingTab.classList.add('active');

        //Show selected pricing plan table content

        let dataTarget = pricingTab.getAttribute('data-tab-target');

        //console.log(dataTarget);


        for (let pricingDataCell of pricingDataCells) {
            pricingDataCell.style.display = "none";
        }

        for (let dataTargetCell of pricingTable.querySelectorAll('.' + dataTarget)) {


            dataTargetCell.style.display = "table-cell";
        }



    });
});



/* ======= FAQ accordion ======= */