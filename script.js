// script.js

function HostingPlan(name, price, storage, bandwidth, domain, support) {
    this.name = name;
    this.price = price;
    this.storage = storage;
    this.bandwidth = bandwidth;
    this.domain = domain;
    this.support = support;
}

// Creating hosting plans
const basicPlan = new HostingPlan("Basic", 5, "10GB Storage", "100GB Bandwidth", "1 Domain", "Email Support");
const proPlan = new HostingPlan("Pro", 15, "50GB Storage", "500GB Bandwidth", "5 Domains", "Email & Phone Support");
const businessPlan = new HostingPlan("Business", 25, "Unlimited Storage", "Unlimited Bandwidth", "Unlimited Domains", "24/7 Support");

const plans = [basicPlan, proPlan, businessPlan];



document.addEventListener("DOMContentLoaded", function() {
    const plansContainer = document.getElementById("plansContainer");

    plans.forEach(plan => {
        const planCard = document.createElement("div");
        planCard.className = "card";
        planCard.innerHTML = `
            <h2>${plan.name}</h2>
            <p class="dollar">$${plan.price}</br><span>PER MONTH<span></p>
            <div class="list">
            <ul>
            <li><span> ${plan.storage} </span></li>
            <li><span> ${plan.bandwidth}</span></li>
            <li><span> ${plan.domain}</span></li>
            <li><span> ${plan.support}</span></li>
            </ul>
            <div>
            <button onclick="purchasePlan('${plan.name}', ${plan.price})">Subscribe Now</button>
        `;
        plansContainer.appendChild(planCard);
    });
});

function purchasePlan(name, price) {
    alert(`You have subscribed the ${name} Plan for $${price}/month.`);
}

