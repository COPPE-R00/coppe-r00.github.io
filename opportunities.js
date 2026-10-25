// ======================================================
// NIGERIA OPPORTUNITY ALERT
// Current recruitment and vacancy announcements
// Updated: 26 October 2026
// ======================================================

const opportunities = [

  // ======================================================
  // FEDERAL GOVERNMENT RECRUITMENT
  // ======================================================

  {
    title: "EFCC Recruitment 2026",
    category: "job",
    tag: "FEDERAL RECRUITMENT",
    description:
      "The Economic and Financial Crimes Commission has announced recruitment for investigative, professional and skilled-worker positions. Categories include Detective Superintendent (GL 08), Detective Inspector (GL 06), Detective Assistant (GL 04), and selected professional roles. Requirements and age limits differ by category. Read the official notice before applying. Applications are free.",
    deadline: "Check the official portal immediately",
    source: "Economic and Financial Crimes Commission",
    url: "https://recruitment.efcc.gov.ng/"
  },

  // ======================================================
  // UNICEF VACANCIES
  // ======================================================

  {
    title: "UNICEF — International Consultant for AI Solutions",
    category: "job",
    tag: "INTERNATIONAL CONSULTANCY",
    description:
      "A 12-month consultancy supporting education data management and AI solutions in Abuja, Nigeria. The role requires substantial experience in digital systems, artificial intelligence and data analysis. Review the full vacancy for the required qualifications and application documents.",
    deadline: "28 October 2026",
    source: "UNICEF Careers",
    url: "https://jobs.unicef.org/cw/en-us/job/596456/international-consultant-for-ai-solutions-for-education-data-management-education-abuja-nigeria-12-months-remotetravel-596456"
  },

  {
    title: "UNICEF — Programme Assistant (G-5)",
    category: "job",
    tag: "PROGRAMME / ADMINISTRATION",
    description:
      "A temporary 364-day Programme Assistant position in Abuja, Nigeria, supporting programme operations in the Health Section. The listing specifies secondary education and relevant administrative or clerical experience. Check the vacancy notice for the complete requirements and application instructions.",
    deadline: "29 October 2026",
    source: "UNICEF Careers",
    url: "https://jobs.unicef.org/mob/cw/en-us/job/596498/programme-assistant-g5-ta-364-days-139003-abuja-nigeria-wcar"
  },

  {
    title: "UNICEF — Sanitation Finance Consultant",
    category: "healthcare",
    tag: "WASH / PUBLIC HEALTH",
    description:
      "A 12-month consultancy supporting sanitation finance and resource mobilisation in Nigeria. This is an experienced-professional role with substantial relevant finance experience requirements. Read the full vacancy before applying.",
    deadline: "5 November 2026",
    source: "UNICEF Careers",
    url: "https://jobs.unicef.org/fr/job/596531/sanitation-finance-consultant-national-or-international-abuja-nigeria-remote-with-travel-12-months-596531"
  },

  // ======================================================
  // HEALTHCARE RECRUITMENT
  // ======================================================

  {
    title: "OAUTHC Recruitment — Ile-Ife",
    category: "healthcare",
    tag: "HOSPITAL RECRUITMENT",
    description:
      "Obafemi Awolowo University Teaching Hospitals Complex recruitment announcement. The notice covers several categories, including medical, nursing, pharmacy, laboratory and other health-related positions. Consult the vacancy announcement for the complete list, qualifications, closing date and application instructions.",
    deadline: "Six weeks from the advertisement dated 20 October 2026 — confirm in the notice",
    source: "Federal Character Commission",
    url: "https://fcc.gov.ng/job-listings/obafemi-awolowo-university-teaching-hospitals-complex-ile-ife/"
  },

  {
    title: "NAUTH Recruitment — Nnewi",
    category: "healthcare",
    tag: "HOSPITAL RECRUITMENT",
    description:
      "Nnamdi Azikiwe University Teaching Hospital recruitment announcement in Nnewi, Anambra State. The published notice includes medical positions. Review the full announcement for the complete vacancies, required qualifications, closing date and instructions for applying.",
    deadline: "Check the official vacancy announcement",
    source: "Federal Character Commission",
    url: "https://fcc.gov.ng/job-listings/nnamdi-azikiwe-university-teaching-hospital-p-m-b-5025-nnewi-anambra-state-nigeria/"
  },

  // ======================================================
  // UNIVERSITY RECRUITMENT
  // ======================================================

  {
    title: "Alex Ekwueme Federal University Recruitment",
    category: "job",
    tag: "UNIVERSITY RECRUITMENT",
    description:
      "Recruitment announcement for academic and non-academic positions at Alex Ekwueme Federal University, Ndufu-Alike, Ebonyi State. Read the specific vacancy announcement to identify available positions, qualifications, required documents and application instructions.",
    deadline: "Check the official vacancy announcement",
    source: "Federal Character Commission",
    url: "https://fcc.gov.ng/job-listings/alex-ekwueme-federal-university-ndufu-alike-ebonyi-state-p-m-b-1010-abakaliki-ebonyi-state/"
  }

];


// ======================================================
// DISPLAY OPPORTUNITIES
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("opportunityList");

  if (!container) {
    console.error(
      'Opportunity list container not found. Add an element with id="opportunityList".'
    );
    return;
  }

  // Safely escape text before displaying it.
  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (character) {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };

      return entities[character];
    });
  }

  // Accept HTTPS links only.
  function getSafeURL(value) {
    try {
      const parsedURL = new URL(value);

      if (parsedURL.protocol === "https:") {
        return parsedURL.href;
      }
    } catch (error) {
      console.warn("Invalid opportunity URL:", value);
    }

    return "#";
  }

  // Render opportunity cards.
  function renderOpportunities(items) {

    container.innerHTML = "";

    if (!items.length) {
      container.innerHTML =
        '<p class="no-results">No opportunities found. Try another search.</p>';
      return;
    }

    items.forEach(function (opportunity) {

      const card = document.createElement("article");

      card.className = "card";
      card.dataset.category = opportunity.category;

      card.dataset.search = (
        opportunity.title + " " +
        opportunity.category + " " +
        opportunity.description + " " +
        opportunity.source
      ).toLowerCase();

      const safeURL = getSafeURL(opportunity.url);

      card.innerHTML = `
        <span class="tag">
          ${escapeHTML(opportunity.tag)}
        </span>

        <h3>
          ${escapeHTML(opportunity.title)}
        </h3>

        <p>
          ${escapeHTML(opportunity.description)}
        </p>

        <div class="deadline">
          <strong>Deadline:</strong>
          ${escapeHTML(opportunity.deadline)}
        </div>

        <div class="source">
          <strong>Source:</strong>
          ${escapeHTML(opportunity.source)}
        </div>

        <a
          class="button"
          href="${escapeHTML(safeURL)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View ${escapeHTML(opportunity.title)} recruitment details"
        >
          View Recruitment Details
        </a>
      `;

      container.appendChild(card);

    });
  }

  // Display all opportunities initially.
  renderOpportunities(opportunities);


  // ======================================================
  // SEARCH FUNCTIONALITY
  // ======================================================

  const searchInput = document.getElementById("searchInput");

  if (searchInput) {

    searchInput.addEventListener("input", function () {

      const query = searchInput.value.toLowerCase().trim();

      const filtered = opportunities.filter(function (item) {

        const searchableText = (
          item.title + " " +
          item.category + " " +
          item.description + " " +
          item.source + " " +
          item.tag
        ).toLowerCase();

        return searchableText.includes(query);

      });

      renderOpportunities(filtered);

    });

  }


  // ======================================================
  // CATEGORY FILTERS
  // ======================================================

  const categoryButtons = document.querySelectorAll("[data-filter]");

  categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const selectedCategory = button.dataset.filter;

      if (selectedCategory === "all") {
        renderOpportunities(opportunities);
        return;
      }

      const filtered = opportunities.filter(function (item) {
        return item.category === selectedCategory;
      });

      renderOpportunities(filtered);

    });

  });

});
