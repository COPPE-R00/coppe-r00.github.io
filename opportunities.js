// ==========================================
// NIGERIA OPPORTUNITY ALERT
// Jobs, Scholarships, Healthcare, Training
// ==========================================

const opportunities = [

  // ==========================================
  // INTERNSHIPS AND FELLOWSHIPS
  // ==========================================

  {
    title: "African Development Bank Internship Programme",
    category: "internship",
    tag: "INTERNSHIP",
    description: "Explore internship opportunities with the African Development Bank. Check the official page for current vacancies, eligibility and deadlines.",
    deadline: "Check official vacancy",
    source: "African Development Bank",
    url: "https://www.afdb.org/en/vacancy"
  },

  {
    title: "Mandela Washington Fellowship",
    category: "fellowship",
    tag: "FELLOWSHIP",
    description: "Explore the Young African Leaders Initiative fellowship programme and check whether applications are currently open.",
    deadline: "Check official announcement",
    source: "Mandela Washington Fellowship",
    url: "https://www.mandelawashingtonfellowship.org/"
  },

  {
    title: "NCDC Public Health Internship",
    category: "healthcare",
    tag: "PUBLIC HEALTH",
    description: "Explore the Nigeria Centre for Disease Control and Prevention internship information. Check the current application cycle and eligibility before applying.",
    deadline: "Check official announcement",
    source: "NCDC",
    url: "https://ncdc.gov.ng/internship"
  },

  {
    title: "Young African Leaders Initiative",
    category: "fellowship",
    tag: "FELLOWSHIP",
    description: "Explore leadership development resources and fellowship announcements for young Africans.",
    deadline: "Varies",
    source: "YALI",
    url: "https://yali.state.gov/"
  },

  // ==========================================
  // GENERAL JOB OPPORTUNITIES
  // ==========================================

  {
    title: "LEEP Nigeria Jobs",
    category: "job",
    tag: "JOBS",
    description: "Search job vacancies across different sectors, including technology, business, agriculture and other careers.",
    deadline: "Varies by vacancy",
    source: "LEEP Jobs",
    url: "https://jobs.leep.gov.ng/"
  },

  {
    title: "NiYA Jobs",
    category: "job",
    tag: "YOUTH JOBS",
    description: "Explore job listings and employment opportunities available through the Nigeria Youth Investment Fund-related youth employment platform.",
    deadline: "Varies by vacancy",
    source: "NiYA Jobs",
    url: "https://www.jobs.niya.gov.ng/"
  },

  {
    title: "National Electronic Labour Exchange",
    category: "job",
    tag: "JOBS",
    description: "Explore employment listings and career opportunities. Confirm the employer and vacancy details before applying.",
    deadline: "Varies",
    source: "NELEX",
    url: "https://nelex.gov.ng/"
  },

  {
    title: "United Nations Careers",
    category: "job",
    tag: "INTERNATIONAL JOBS",
    description: "Search international vacancies, consultancies and other career opportunities with United Nations organisations.",
    deadline: "Varies by vacancy",
    source: "United Nations",
    url: "https://careers.un.org/"
  },

  {
    title: "UNICEF Nigeria Opportunities",
    category: "job",
    tag: "NGO / JOBS",
    description: "Find Nigeria-related vacancies, internships and consultancies. Check each listing's qualifications and closing date.",
    deadline: "Varies by listing",
    source: "UNICEF",
    url: "https://jobs.unicef.org/en-us/Search/?location=nigeria"
  },

  {
    title: "African Development Bank Careers",
    category: "job",
    tag: "INTERNATIONAL JOBS",
    description: "Explore professional vacancies and other career opportunities at the African Development Bank.",
    deadline: "Varies",
    source: "African Development Bank",
    url: "https://www.afdb.org/en/about-us/careers"
  },

  {
    title: "Reckitt Careers",
    category: "job",
    tag: "CORPORATE JOBS",
    description: "Explore career and graduate opportunities. Check the official vacancy listing for available positions.",
    deadline: "Varies",
    source: "Reckitt",
    url: "https://www.reckitt.com/careers/"
  },

  {
    title: "Oilserv Careers",
    category: "job",
    tag: "OIL AND GAS",
    description: "Explore professional and graduate career opportunities with Oilserv.",
    deadline: "Varies",
    source: "Oilserv",
    url: "https://oilservgroup.com/careers/"
  },

  // ==========================================
  // HEALTHCARE JOBS
  // ==========================================

  {
    title: "Kaduna PHC Board — CHEW",
    category: "healthcare",
    tag: "CHEW",
    description: "Community Health Technician recruitment information. Review the official vacancy for qualification, professional registration and application requirements.",
    deadline: "Check official portal",
    source: "Kaduna State PHC Board",
    url: "https://recruitment.kdsg.gov.ng/"
  },

  {
    title: "Kaduna PHC Board — JCHEW",
    category: "healthcare",
    tag: "JCHEW",
    description: "Community Health Assistant recruitment information. Check the required certificate, registration and eligibility on the official portal.",
    deadline: "Check official portal",
    source: "Kaduna State PHC Board",
    url: "https://recruitment.kdsg.gov.ng/"
  },

  {
    title: "Kaduna PHC Board — Medical Laboratory Technician",
    category: "healthcare",
    tag: "MLT",
    description: "Medical Laboratory Technician recruitment information. Confirm the required qualification and professional registration.",
    deadline: "Check official portal",
    source: "Kaduna State PHC Board",
    url: "https://recruitment.kdsg.gov.ng/"
  },

  {
    title: "Kaduna PHC Board — Nursing Officer",
    category: "healthcare",
    tag: "NURSING",
    description: "Nursing recruitment information. Review the official vacancy for qualification and Nursing and Midwifery Council registration requirements.",
    deadline: "Check official portal",
    source: "Kaduna State PHC Board",
    url: "https://recruitment.kdsg.gov.ng/"
  },

  {
    title: "Kaduna PHC Board — Pharmacy Technician",
    category: "healthcare",
    tag: "PHARMACY",
    description: "Check the official portal for pharmacy technician vacancy requirements, registration and application instructions.",
    deadline: "Check official portal",
    source: "Kaduna State PHC Board",
    url: "https://recruitment.kdsg.gov.ng/"
  },

  {
    title: "Kaduna PHC Board — Environmental Health",
    category: "healthcare",
    tag: "ENVIRONMENTAL HEALTH",
    description: "Explore Environmental Health Officer and Environmental Health Technician recruitment information.",
    deadline: "Check official portal",
    source: "Kaduna State PHC Board",
    url: "https://recruitment.kdsg.gov.ng/"
  },

  {
    title: "Kaduna PHC Board — Health Educator",
    category: "healthcare",
    tag: "HEALTH EDUCATION",
    description: "Check the official recruitment portal for health educator requirements and professional registration.",
    deadline: "Check official portal",
    source: "Kaduna State PHC Board",
    url: "https://recruitment.kdsg.gov.ng/"
  },

  {
    title: "Kaduna PHC Board — Nutrition Officer",
    category: "healthcare",
    tag: "NUTRITION",
    description: "Explore nutrition-related healthcare recruitment information and verify qualification requirements.",
    deadline: "Check official portal",
    source: "Kaduna State PHC Board",
    url: "https://recruitment.kdsg.gov.ng/"
  },

  {
    title: "Kaduna PHC Board — Health Information Management",
    category: "healthcare",
    tag: "HEALTH INFORMATION",
    description: "Check the official portal for Health Information Management Technician recruitment and registration requirements.",
    deadline: "Check official portal",
    source: "Kaduna State PHC Board",
    url: "https://recruitment.kdsg.gov.ng/"
  },

  {
    title: "Federal Ministry of Health Careers",
    category: "healthcare",
    tag: "HEALTHCARE CAREERS",
    description: "Explore healthcare workforce information and official career announcements from the Federal Ministry of Health and Social Welfare.",
    deadline: "Check official announcements",
    source: "Federal Ministry of Health",
    url: "https://health.gov.ng/human-resources/"
  },

  {
    title: "NASCP Careers and Opportunities",
    category: "healthcare",
    tag: "PUBLIC HEALTH",
    description: "Explore vacancies, consultancies and other opportunities published by the National AIDS and STIs Control Programme. Check whether each listing is still open.",
    deadline: "Varies",
    source: "NASCP",
    url: "https://www.nascp.gov.ng/opportunities/"
  },

  {
    title: "APIN Public Health Initiatives Careers",
    category: "healthcare",
    tag: "PUBLIC HEALTH / NGO",
    description: "Explore public health career opportunities and verify current vacancies on the organisation's official website.",
    deadline: "Varies",
    source: "APIN Public Health Initiatives",
    url: "https://apin.org.ng/"
  },

  {
    title: "AHNi — Public Health Careers",
    category: "healthcare",
    tag: "HEALTH / NGO",
    description: "Explore health programme and public health career information. Check the official organisation website for current vacancies.",
    deadline: "Varies",
    source: "AHNi",
    url: "https://ahnigeria.org/"
  },

  // ==========================================
  // SCHOLARSHIPS
  // ==========================================

  {
    title: "Federal Ministry of Education Scholarships",
    category: "scholarship",
    tag: "SCHOLARSHIP",
    description: "Check official government announcements for scholarship opportunities, eligibility and application deadlines.",
    deadline: "Check official announcement",
    source: "Federal Ministry of Education",
    url: "https://education.gov.ng/"
  },

  {
    title: "Study in Nigeria",
    category: "scholarship",
    tag: "EDUCATION",
    description: "Explore information about studying in Nigeria and check available education opportunities.",
    deadline: "Varies",
    source: "Study in Nigeria",
    url: "https://www.studyinnigeria.gov.ng/"
  },

  // ==========================================
  // TRAINING AND DIGITAL SKILLS
  // ==========================================

  {
    title: "MTN ICT and Business Skills Training",
    category: "training",
    tag: "DIGITAL SKILLS",
    description: "Check MTN Nigeria's official website for ICT, entrepreneurship and business skills training announcements.",
    deadline: "Check official announcement",
    source: "MTN Nigeria",
    url: "https://www.mtn.ng/"
  },

  {
    title: "Microsoft Learn",
    category: "training",
    tag: "TECHNOLOGY TRAINING",
    description: "Access online learning paths covering technology, cloud computing, data, AI and other digital skills. Course availability and certification conditions vary.",
    deadline: "Self-paced learning",
    source: "Microsoft Learn",
    url: "https://learn.microsoft.com/training/"
  },

  {
    title: "Cisco Networking Academy",
    category: "training",
    tag: "IT TRAINING",
    description: "Explore networking, cybersecurity and other technology courses. Check each course for fees and certificate requirements.",
    deadline: "Varies by course",
    source: "Cisco Networking Academy",
    url: "https://www.netacad.com/"
  },

  // ==========================================
  // GRANTS AND ENTREPRENEURSHIP
  // ==========================================

  {
    title: "Tony Elumelu Foundation Entrepreneurship Programme",
    category: "grant",
    tag: "ENTREPRENEURSHIP",
    description: "Check the official foundation website for programme announcements, eligibility and application periods. Funding is not guaranteed to every applicant.",
    deadline: "Check official announcement",
    source: "Tony Elumelu Foundation",
    url: "https://www.tonyelumelufoundation.org/"
  },

  {
    title: "SMEDAN Business Support",
    category: "grant",
    tag: "SMALL BUSINESS",
    description: "Explore small business support, training and programme announcements from the Small and Medium Enterprises Development Agency of Nigeria.",
    deadline: "Varies by programme",
    source: "SMEDAN",
    url: "https://smedan.gov.ng/"
  },

  // ==========================================
  // VOLUNTEERING
  // ==========================================

  {
    title: "United Nations Online Volunteering",
    category: "volunteering",
    tag: "VOLUNTEERING",
    description: "Explore online volunteering assignments with organisations around the world through the official United Nations Volunteers platform.",
    deadline: "Varies by assignment",
    source: "United Nations Volunteers",
    url: "https://app.unv.org/"
  }

];


// ==========================================
// DISPLAY OPPORTUNITIES
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("opportunityList");

  if (!container) {
    return;
  }

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

  function renderOpportunities(items) {

    container.innerHTML = "";

    if (items.length === 0) {
      container.innerHTML =
        "<p>No opportunities found. Try another search.</p>";
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

      const safeURL = /^https:\/\/[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i
        .test(opportunity.url) ? opportunity.url : "#";

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
          Deadline: ${escapeHTML(opportunity.deadline)}
        </div>

        <div class="source">
          Source: ${escapeHTML(opportunity.source)}
        </div>

        <a
          class="button"
          href="${escapeHTML(safeURL)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Opportunity
        </a>
      `;

      container.appendChild(card);

    });
  }

  renderOpportunities(opportunities);

  // Connect to an existing search box if present.
  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("input", function () {

      const query = searchInput.value.toLowerCase().trim();

      const filtered = opportunities.filter(function (item) {

        const searchableText = (
          item.title + " " +
          item.category + " " +
          item.description + " " +
          item.source
        ).toLowerCase();

        return searchableText.includes(query);
      });

      renderOpportunities(filtered);
    });
  }

  // Connect to existing category buttons if present.
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
