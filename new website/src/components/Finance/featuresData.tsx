import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="85"
        height="85"
        fill="#437FBE"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g>
          <path d="M484.766 310.468H27.234a8.17 8.17 0 00-8.17 8.17v108.936a8.17 8.17 0 008.17 8.17h457.532a8.17 8.17 0 008.17-8.17V318.638a8.17 8.17 0 00-8.17-8.17zm-8.17 76.255H125.277c-4.513 0-8.17 3.658-8.17 8.17s3.657 8.17 8.17 8.17h351.319v16.34H35.404v-16.34h57.191c4.513 0 8.17-3.658 8.17-8.17s-3.657-8.17-8.17-8.17H35.404v-59.915h16.34v13.617c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17v-13.617h16.34v13.617c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17v-13.617h16.34v13.617c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17v-13.617h16.34v13.617c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17v-13.617h16.34v13.617c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17v-13.617h16.34v13.617c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17v-13.617h16.34v13.617c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17v-13.617h16.34v13.617c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17v-13.617h16.34v13.617c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17v-13.617h16.34v13.617c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17v-13.617h16.34v13.617a8.17 8.17 0 008.17 8.17 8.17 8.17 0 008.17-8.17v-13.617h16.34v13.617a8.17 8.17 0 008.17 8.17 8.17 8.17 0 008.17-8.17v-13.617h16.34v13.617a8.17 8.17 0 008.17 8.17 8.17 8.17 0 008.17-8.17v-13.617h16.34v59.915zM484.766 452.085H92.596c-.878 0-1.75.142-2.583.419L24.651 474.29a8.17 8.17 0 00-.001 15.502l65.362 21.789a8.16 8.16 0 002.584.419h392.17a8.17 8.17 0 008.17-8.17v-43.574a8.17 8.17 0 00-8.17-8.171zm-400.34 40.409L53.07 482.04l31.355-10.45v20.904zm305.021 3.166H100.766v-27.234h288.681v27.234zm43.574 0h-27.234v-27.234h27.234v27.234zm43.575 0h-27.234v-27.234h27.234v27.234zM484.766 277.787H27.234c-4.513 0-8.17 3.658-8.17 8.17s3.657 8.17 8.17 8.17h457.532c4.513 0 8.17-3.658 8.17-8.17s-3.657-8.17-8.17-8.17zM92.596 174.298H27.234a8.17 8.17 0 00-8.17 8.17v70.809a8.17 8.17 0 008.17 8.17 8.17 8.17 0 008.17-8.17v-62.638h49.021v62.638c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17v-70.809a8.168 8.168 0 00-8.169-8.17zM190.638 130.723h-65.362a8.17 8.17 0 00-8.17 8.17v114.383c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17V147.064h49.021v106.213c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17V138.894a8.167 8.167 0 00-8.169-8.171zM288.681 87.149h-65.362a8.17 8.17 0 00-8.17 8.17v157.957c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17V103.489h49.021v149.787c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17V95.319a8.168 8.168 0 00-8.169-8.17zM386.723 43.574h-65.362a8.17 8.17 0 00-8.17 8.17v201.532c0 4.512 3.657 8.17 8.17 8.17s8.17-3.658 8.17-8.17V59.915h49.021v193.362a8.17 8.17 0 008.17 8.17 8.17 8.17 0 008.17-8.17V51.745a8.168 8.168 0 00-8.169-8.171zM484.766 0h-65.362a8.17 8.17 0 00-8.17 8.17v245.106a8.17 8.17 0 008.17 8.17 8.17 8.17 0 008.17-8.17V16.34h49.021v236.936a8.17 8.17 0 008.17 8.17 8.17 8.17 0 008.17-8.17V8.17A8.168 8.168 0 00484.766 0z"></path>
        </g>
      </svg>
    ),
    title: "Cost Efficiency",
    paragraph:
      "Clients has no upfront investment costs by outsourcing the build phase to us and gradually pay for services during the operate phase.",
  },
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="85"
        height="85"
        fill="none"
        stroke="#437FBE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 64 64"
      >
        <path
          fill=""
          d="M32 6L12 16v18c0 16 20 24 20 24s20-8 20-24V16z"
        ></path>
        <path strokeWidth="3" d="M22 34l6 6 14-14"></path>
      </svg>
    ),
    title: "Risk Mitigation",
    paragraph:
      "The build and operate phases allow the client to transfer project implementation and operational risks to us and focus on the service delivery to the end user.",
  }, {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="85"
        height="85"
        fill="none"
        viewBox="0 0 16 16"
      >
        <g fill="#437FBE">
          <path d="M5.686 0h4.628l1.864 3.278 1.75-1.01.5.866-1.098 4.098-4.098-1.098-.5-.866 1.714-.99L9.15 2h-2.3l-.554.974-1.733-1L5.686 0zM13.165 9.06l.539.948L12.605 12H10v-2H9l-3 3 3 3h1v-2h3.787l2.209-4.008-1.1-1.932-1.731 1zM3.394 12H4.5v2H2.213L.003 9.992l1.842-3.236L.072 5.732l.5-.866L4.67 3.768l1.098 4.098-.5.866-1.691-.976-1.28 2.252L3.393 12z"></path>
        </g>
      </svg>
    ),
    title: "Utilization of Existing Resources",
    paragraph:
      "In BOT model all existing resources, both human and physical, are best utilized as it is in the common interest to utilize all existing resources.",
  }, {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="85"
        height="85"
        fill="#437FBE"
        transform="rotate(270)"
        viewBox="0 0 32 32"
      >
        <path d="M17.451 22.151a12.133 12.133 0 01-.66-.613c-2.468-2.467-3.425-5.51-2.139-6.796s4.328-.328 6.796 2.139c.209.209.407.422.594.638l-4.05-10.471-1.454 3.069a4233.885 4233.885 0 00-3.434-7.332l1.266 7.996L4.545.959 1.068.912 1.02 4.484l10.051 10.047-8.386-1.327s4.063 1.906 7.257 3.397l-2.953 1.451 10.465 4.099zm11.813 7.278l-3.172-9.146 2.677 2.218-1.088-6.208-2.706 2.928-1.474.368-2.097-1.145-3.124 3.124 1.145 2.096-.367 1.469-2.873 2.656 6.208 1.088-1.98-2.519 8.852 3.07zm-7.123-4.799l2.324-2.324c4.308 4.381 2.062 6.638-2.324 2.324z"></path>
      </svg>
    ),
    title: "Immediate Start",
    paragraph:
      " In BOT model, project can start immediately.",
  }, {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="85"
        height="85"
        fill="#437FBE"
        version="1.1"
        viewBox="0 0 447.021 447.021"
        xmlSpace="preserve"
      >
        <g>
          <path d="M423.521 224.01h-48c-12.958 0-23.5 10.542-23.5 23.5v37.895L161.613 95.016l45.963.014c12.927-.031 23.444-10.573 23.444-23.5V23.51a23.34 23.34 0 00-6.894-16.627C219.688 2.45 213.792.01 207.525.01h-.031L7.599.113A7.5 7.5 0 00.103 7.609L0 199.51c0 12.958 10.542 23.5 23.5 23.5h48c12.958 0 23.5-10.542 23.5-23.5v-37.895l190.408 190.389-45.964-.014c-12.927.031-23.444 10.573-23.444 23.5v48.019a23.344 23.344 0 006.894 16.628c4.438 4.433 10.333 6.872 16.599 6.872h.032l199.897-.103a7.5 7.5 0 007.496-7.496l.103-191.901c0-12.957-10.542-23.499-23.5-23.499zm8.401 207.902l-192.411.099h-.012a8.443 8.443 0 01-6.006-2.485 8.445 8.445 0 01-2.494-6.015v-48.019c0-4.676 3.804-8.489 8.459-8.5l64.059.019h.002a7.5 7.5 0 005.304-12.804l-216.021-216a7.501 7.501 0 00-12.803 5.304v56c0 4.687-3.813 8.5-8.5 8.5h-48c-4.687 0-8.5-3.813-8.5-8.496l.099-184.405 192.412-.1h.011c2.269 0 4.402.883 6.007 2.486a8.444 8.444 0 012.493 6.014v48.02c0 4.676-3.804 8.489-8.459 8.5l-64.059-.02h-.002a7.5 7.5 0 00-5.304 12.804l216.021 216a7.5 7.5 0 0012.803-5.304v-56c0-4.687 3.813-8.5 8.5-8.5h48c4.687 0 8.5 3.813 8.5 8.496l-.099 184.406z"></path>
          <path d="M311.521 384.01h-56.569a7.5 7.5 0 000 15h56.569a7.5 7.5 0 000-15zM143.021 39.51a7.5 7.5 0 00-7.5-7.5h-80a7.5 7.5 0 000 15h80a7.5 7.5 0 007.5-7.5zM167.521 47.01h16a7.5 7.5 0 000-15h-16a7.5 7.5 0 000 15z"></path>
        </g>
      </svg>
    ),
    title: "Flexibility",
    paragraph:
      "The client can focus on its core competencies while relying on our expertise for specialized tasks.",
  },

];
export default featuresData;
