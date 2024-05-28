<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  const features = [
    {
      name: "Community Lead",
      description:
        "Built by the community, for the community that wishes to use it.",
      linkText: "Guidelines",
      newPage: true,
      link: "https://docs.fmtm.dev/CONTRIBUTING/#code-contribution-guidelines",
      svgContent: `
      <circle cx="10" cy="6" r="4" stroke="#1C274C" stroke-width="1.5"/>
<path d="M18 17.5C18 19.9853 18 22 10 22C2 22 2 19.9853 2 17.5C2 15.0147 5.58172 13 10 13C14.4183 13 18 15.0147 18 17.5Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M18.0885 12.5385L18.5435 11.9423L18.0885 12.5385ZM19 8.64354L18.4681 9.17232C18.6089 9.31392 18.8003 9.39354 19 9.39354C19.1997 9.39354 19.3911 9.31392 19.5319 9.17232L19 8.64354ZM19.9115 12.5385L19.4565 11.9423L19.9115 12.5385ZM18.5435 11.9423C18.0571 11.571 17.619 11.274 17.2659 10.8891C16.9387 10.5324 16.75 10.1638 16.75 9.69973H15.25C15.25 10.6481 15.6642 11.362 16.1606 11.9031C16.6311 12.4161 17.2372 12.8322 17.6335 13.1347L18.5435 11.9423ZM16.75 9.69973C16.75 9.28775 16.9898 8.95469 17.2973 8.81862C17.5635 8.7008 17.9874 8.68874 18.4681 9.17232L19.5319 8.11476C18.6627 7.24047 17.5865 7.0503 16.6903 7.44694C15.8352 7.82533 15.25 8.69929 15.25 9.69973H16.75ZM17.6335 13.1347C17.7825 13.2483 17.9756 13.3959 18.1793 13.5111C18.3832 13.6265 18.6656 13.75 19 13.75V12.25C19.0344 12.25 19.0168 12.2615 18.9179 12.2056C18.8187 12.1495 18.7061 12.0663 18.5435 11.9423L17.6335 13.1347ZM20.3665 13.1347C20.7628 12.8322 21.3689 12.4161 21.8394 11.9031C22.3358 11.362 22.75 10.6481 22.75 9.69973H21.25C21.25 10.1638 21.0613 10.5324 20.7341 10.8891C20.381 11.274 19.9429 11.571 19.4565 11.9423L20.3665 13.1347ZM22.75 9.69973C22.75 8.69929 22.1648 7.82533 21.3097 7.44694C20.4135 7.0503 19.3373 7.24047 18.4681 8.11476L19.5319 9.17232C20.0126 8.68874 20.4365 8.7008 20.7027 8.81862C21.0102 8.95469 21.25 9.28775 21.25 9.69973H22.75ZM19.4565 11.9423C19.2939 12.0663 19.1813 12.1495 19.0821 12.2056C18.9832 12.2615 18.9656 12.25 19 12.25V13.75C19.3344 13.75 19.6168 13.6265 19.8207 13.5111C20.0244 13.3959 20.2175 13.2483 20.3665 13.1347L19.4565 11.9423Z" fill="#1C274C"/>
      `,
    },
    {
      name: "Open Source",
      description: "HOT and NAXA are core contributors to the project.",
      link: "https://github.com/hotosm/fmtm",
      linkText: "Code",
      newPage: true,
      svgContent: `<path d="M4.01207 15.7618L5.70156 10.6933C6.46758 8.39525 6.85059 7.24623 7.75684 7.03229C8.6631 6.81835 9.51953 7.67478 11.2324 9.38764L14.6114 12.7666C16.3242 14.4795 17.1807 15.3359 16.9667 16.2422C16.7528 17.1484 15.6038 17.5314 13.3057 18.2975L8.23724 19.987C5.47183 20.9088 4.08912 21.3697 3.35924 20.6398C2.62936 19.9099 3.09026 18.5272 4.01207 15.7618Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12.2351 18.3461C12.2351 18.3461 11.477 16.0649 11.477 14.5552C11.477 13.0454 12.2351 10.7643 12.2351 10.7643M8.06517 19.4833C8.06517 19.4833 7.42484 16.7314 7.307 14.9343C7.11229 11.965 8.06517 7.35254 8.06517 7.35254" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.5093 10.0061L14.6533 9.28614C14.7986 8.55924 15.3224 7.96597 16.0256 7.73155C16.7289 7.49714 17.2526 6.90387 17.398 6.17697L17.542 5.45703" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M17.5688 12.2533L17.7817 12.3762C18.4388 12.7556 19.265 12.6719 19.8327 12.1685C20.3468 11.7126 21.0789 11.597 21.7085 11.8723L22 11.9997" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10.5352 3C10.1977 3.55206 10.2823 4.26344 10.7399 4.72097L10.8377 4.81885C11.2309 5.21201 11.3759 5.78959 11.215 6.32182" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M13.561 4.39648C13.7621 4.19542 13.8626 4.09489 13.9788 4.05804C14.0772 4.02688 14.1827 4.02688 14.281 4.05804C14.3973 4.09489 14.4978 4.19542 14.6989 4.39648C14.8999 4.59753 15.0004 4.69806 15.0373 4.8143C15.0685 4.91262 15.0685 5.01817 15.0373 5.11648C15.0004 5.23272 14.8999 5.33325 14.6989 5.53431C14.4978 5.73536 14.3973 5.83589 14.281 5.87274C14.1827 5.90391 14.0772 5.90391 13.9788 5.87274C13.8626 5.83589 13.7621 5.73536 13.561 5.53431C13.36 5.33325 13.2594 5.23272 13.2226 5.11648C13.1914 5.01817 13.1914 4.91262 13.2226 4.8143C13.2594 4.69806 13.36 4.59753 13.561 4.39648Z" fill="#1C274C"/>
<path d="M19.4682 7.46822C19.7136 7.22283 19.8363 7.10014 19.9747 7.04681C20.1367 6.9844 20.3161 6.9844 20.4781 7.04681C20.6165 7.10014 20.7392 7.22283 20.9846 7.46822C21.23 7.71362 21.3527 7.83631 21.406 7.97472C21.4684 8.1367 21.4684 8.31609 21.406 8.47807C21.3527 8.61649 21.23 8.73918 20.9846 8.98457C20.7392 9.22996 20.6165 9.35266 20.4781 9.40599C20.3161 9.4684 20.1367 9.4684 19.9747 9.40599C19.8363 9.35266 19.7136 9.22996 19.4682 8.98457C19.2228 8.73918 19.1001 8.61649 19.0468 8.47807C18.9844 8.31609 18.9844 8.1367 19.0468 7.97472C19.1001 7.83631 19.2228 7.71362 19.4682 7.46822Z" fill="#1C274C"/>
<path d="M6.92712 3.94079C7.13659 3.73132 7.47621 3.73132 7.68567 3.94079C7.89514 4.15026 7.89514 4.48988 7.68567 4.69935C7.47621 4.90882 7.13659 4.90882 6.92712 4.69935C6.71765 4.48988 6.71765 4.15026 6.92712 3.94079Z" fill="#1C274C"/>
<path d="M19.058 15.3134C19.2674 15.1039 19.6071 15.1039 19.8165 15.3134C20.026 15.5228 20.026 15.8624 19.8165 16.0719C19.6071 16.2814 19.2674 16.2814 19.058 16.0719C18.8485 15.8624 18.8485 15.5228 19.058 15.3134Z" fill="#1C274C"/>
<path d="M17.5 9.74145C17.7095 9.53198 18.0491 9.53198 18.2586 9.74145C18.468 9.95092 18.468 10.2905 18.2586 10.5C18.0491 10.7095 17.7095 10.7095 17.5 10.5C17.2905 10.2905 17.2905 9.95092 17.5 9.74145Z" fill="#1C274C"/>`,
    },
    {
      name: "OSM Integration",
      link: "https://openstreetmap.org",
      linkText: "OSM",
      newPage: true,
      description:
        "Map edits can be loaded into OpenStreetMap, with attribution to the user who mapped each feature.",
      svgContent: `<path
                  d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />`,
    },
    {
      name: "Built on ODK",
      link: "https://getodk.org",
      linkText: "ODK",
      newPage: true,
      description:
        "ODK is an industry leading mobile data collection platform.",
      svgContent: `<path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M10 16.5H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 13.5H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 10L22 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14 15C14 14.0572 14 13.5858 14.2929 13.2929C14.5858 13 15.0572 13 16 13C16.9428 13 17.4142 13 17.7071 13.2929C18 13.5858 18 14.0572 18 15C18 15.9428 18 16.4142 17.7071 16.7071C17.4142 17 16.9428 17 16 17C15.0572 17 14.5858 17 14.2929 16.7071C14 16.4142 14 15.9428 14 15Z" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Offline Support",
      description:
        "Mapping can be carried out offline, then sync when connectivity is restored.",
      linkText: "Docs",
      newPage: true,
      svgContent: `<path d="M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M5.76613 10L4.97883 10.3149C2.99294 11.1093 2 11.5065 2 12C2 12.4935 2.99294 12.8907 4.97883 13.6851L7.7873 14.8085C9.77318 15.6028 10.7661 16 12 16C13.2339 16 14.2268 15.6028 16.2127 14.8085L19.0212 13.6851C21.0071 12.8907 22 12.4935 22 12C22 11.5065 21.0071 11.1093 19.0212 10.3149L18.2339 10" stroke="#1C274C" stroke-width="1.5"/>
<path d="M5.76613 14L4.97883 14.3149C2.99294 15.1093 2 15.5065 2 16C2 16.4935 2.99294 16.8907 4.97883 17.6851L7.7873 18.8085C9.77318 19.6028 10.7661 20 12 20C13.2339 20 14.2268 19.6028 16.2127 18.8085L19.0212 17.6851C21.0071 16.8907 22 16.4935 22 16C22 15.5065 21.0071 15.1093 19.0212 14.3149L18.2339 14" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Performance",
      newPage: true,
      description: "Built on the latest technology with speed in mind.",
      svgContent: `<path d="M5.66953 9.91436L8.73167 5.77133C10.711 3.09327 11.7007 1.75425 12.6241 2.03721C13.5474 2.32018 13.5474 3.96249 13.5474 7.24712V7.55682C13.5474 8.74151 13.5474 9.33386 13.926 9.70541L13.946 9.72466C14.3327 10.0884 14.9492 10.0884 16.1822 10.0884C18.4011 10.0884 19.5106 10.0884 19.8855 10.7613C19.8917 10.7724 19.8977 10.7837 19.9036 10.795C20.2576 11.4784 19.6152 12.3475 18.3304 14.0857L15.2683 18.2287C13.2889 20.9067 12.2992 22.2458 11.3758 21.9628C10.4525 21.6798 10.4525 20.0375 10.4525 16.7528L10.4526 16.4433C10.4526 15.2585 10.4526 14.6662 10.074 14.2946L10.054 14.2754C9.6673 13.9117 9.05079 13.9117 7.81775 13.9117C5.59888 13.9117 4.48945 13.9117 4.1145 13.2387C4.10829 13.2276 4.10225 13.2164 4.09639 13.205C3.74244 12.5217 4.3848 11.6526 5.66953 9.91436Z" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Responsive",
      description: "Designed for mobile and desktop.",
      svgContent: `<path d="M11 17H8C5.17157 17 3.75736 17 2.87868 16.1213C2 15.2426 2 13.8284 2 11V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H15.5C17.8346 2 19.0019 2 19.8856 2.47231C20.5833 2.84525 21.1548 3.4167 21.5277 4.11441C22 4.99805 22 6.16537 22 8.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14 15C14 13.1144 14 12.1716 14.5858 11.5858C15.1716 11 16.1144 11 18 11C19.8856 11 20.8284 11 21.4142 11.5858C22 12.1716 22 13.1144 22 15V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V15Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M19 20H17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 22H8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 22V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 13H2" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Scalable",
      description:
        "Handle new users and scale with horizontally scaling edge functions.",
      svgContent: `<path d="M3 22H21" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 11C3 10.0572 3 9.58579 3.29289 9.29289C3.58579 9 4.05719 9 5 9C5.94281 9 6.41421 9 6.70711 9.29289C7 9.58579 7 10.0572 7 11V17C7 17.9428 7 18.4142 6.70711 18.7071C6.41421 19 5.94281 19 5 19C4.05719 19 3.58579 19 3.29289 18.7071C3 18.4142 3 17.9428 3 17V11Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M10 7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V17C14 17.9428 14 18.4142 13.7071 18.7071C13.4142 19 12.9428 19 12 19C11.0572 19 10.5858 19 10.2929 18.7071C10 18.4142 10 17.9428 10 17V7Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M17 4C17 3.05719 17 2.58579 17.2929 2.29289C17.5858 2 18.0572 2 19 2C19.9428 2 20.4142 2 20.7071 2.29289C21 2.58579 21 3.05719 21 4V17C21 17.9428 21 18.4142 20.7071 18.7071C20.4142 19 19.9428 19 19 19C18.0572 19 17.5858 19 17.2929 18.7071C17 18.4142 17 17.9428 17 17V4Z" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Blog",
      link: "https://www.hotosm.org/updates/field-mapping-tasking-manager-fmtm",
      linkText: "More Info",
      newPage: true,
      description: "See more information on the HOTOSM website.",
      svgContent: `<path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M6 12C6 10.5858 6 9.87868 6.43934 9.43934C6.87868 9 7.58579 9 9 9H15C16.4142 9 17.1213 9 17.5607 9.43934C18 9.87868 18 10.5858 18 12V16C18 17.4142 18 18.1213 17.5607 18.5607C17.1213 19 16.4142 19 15 19H9C7.58579 19 6.87868 19 6.43934 18.5607C6 18.1213 6 17.4142 6 16V12Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M7 6H12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
  ]
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="hero min-h-[60vh]">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 md:mb-8"
      >
        Managed Deployment & Premium Support for Field Mapping
      </div>

      <div
        class="text-4xl md:text-6xl font-bold px-2"
        style="line-height: 1.2;"
      >
        The
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >open source</span
        >,
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >community-driven</span
        >
        field mapping
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >coordination</span
        >
        <span> tool.</span>
      </div>
      <div class="mt-6 md:mt-2">
        <a href="https://github.com/hotosm/fmtm">
          <button class="btn btn-primary btn-sm px-6">★ us on Github</button>
        </a>
        <a href="https://docs.fmtm.dev">
          <button class="btn btn-outline btn-primary btn-sm px-6 mt-3 mx-2"
            >Read the Docs</button
          >
        </a>
      </div>
    </div>
  </div>
</div>
<div class="min-h-[60vh]">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        Explore the Features
      </div>
      <div class="mt-6 text-xl font-bold">
        And try them on the
        <a
          class="underline decoration-secondary decoration-[3px] md:decoration-[4px]"
          href="https://fmtm.hotosm.org"
          target="_blank"
        >
          HOTOSM deployment
        </a>
      </div>
    </div>

    <div
      class="flex gap-6 mt-12 max-w-[1064px] mx-auto place-content-center flex-wrap"
    >
      {#each features as feature}
        <div class="card bg-white w-[270px] min-h-[300px] flex-none shadow-xl">
          <div class="card-body items-center text-center p-[24px] pt-[32px]">
            <div>
              <svg
                width="50px"
                height="50px"
                class="mb-2 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html feature.svgContent}
              </svg>
            </div>
            <h2 class="card-title">
              {feature.name}
            </h2>
            <p class="text-sm">
              {feature.description}
            </p>
            {#if feature.link}
              <a
                href={feature.link}
                class="pb-4"
                target={feature.newPage ? "_blank" : ""}
              >
                <button
                  class="btn btn-xs btn-outline rounded-full btn-primary min-w-[100px]"
                  >{feature.linkText ? feature.linkText : "Try It"}</button
                >
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="hero min-h-[60vh] mt-12">
  <div class="hero-content text-center pb-16 pt-4 px-4">
    <div class="max-w-lg">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mt-4"
      >
        See it in Action
      </div>
      <div
        class="flex flex-col lg:flex-row mt-8 gap-6 place-content-center content-center"
      >
        <div class="hidden md:block">
          <a href="https://fmtm.hotosm.org" target="_blank" class="link">
            <div class="mockup-browser border">
              <div class="mockup-browser-toolbar">
                <div class="input" style="background:#eee;">
                  https://fmtm.hotosm.org.io
                </div>
              </div>
              <div class="flex justify-center">
                <img
                  alt="Screenshot of fmtm.hotosm.io homepage"
                  class="aspect-[2044/1242]"
                  src="/images/fmtm-homepage.png"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="md:hidden">
          <a href="https://fmtm.hotosm.org" target="_blank" class="link">
            <div class="card shadow-xl border overflow-hidden">
              <img
                alt="Screenshot of fmtm.hotosm.io homepage"
                class="aspect-[2044/1242]"
                src="/images/fmtm-homepage.png"
              />
            </div></a
          >
        </div>
        <div class="min-w-[270px] lg:min-w-[420px] flex mt-6 lg:mt-0">
          <div class="my-auto">
            <div class="px-4 text-lg md:text-xl">
              Field Mapping TM was created by <a
                href="https://hotosm.org"
                target="_blank"
                class="font-bold whitespace-nowrap">HOTOSM</a
              >
              in collaboration with
              <a
                href="https://naxa.com.np"
                target="_blank"
                class="font-bold whitespace-nowrap">NAXA</a
              >, two organisations specialised in software for geodata.
            </div>
            <div class="px-4 mt-6 text-lg md:text-xl">
              The goal was to simplify the management and coordination of
              <span class="underline decoration-secondary decoration-[3px]"
                >open mapping campaigns,</span
              > where data is collected collaboratively in the field.
            </div>
            <div class="mt-4 text-large">
              <a href="https://fmtm.hotosm.org" target="_blank">
                <button class="btn btn-primary btn-wide mt-3"
                  >See it in Action</button
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
