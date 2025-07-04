export const getHeaderClass = (headerTitle: string | unknown) => {
  switch (headerTitle) {
    case "Q3 Financial Overview":
      return "bg-[#E2E2E2] text-[#545454] py-2";
    case "ABC":
      return "bg-[#D2E0D4] text-[#505450] py-2 text-sm";
    case "Answer a question":
      return "bg-[#DCCFFC] text-[#463E59] py-2 text-sm";
    case "Extract":
      return "bg-[#FAC2AF] text-[#695149] py-2 text-sm";
    case "Submitted":
    case "Job Request":
    case "Status":
    case "Submitter":
    case "URL":
      return "bg-[#EEEEEE] text-[#757575]";
    case "Assigned":
      return "bg-[#E8F0E9] text-[#666C66]";
    case "Priority":
    case "Due Date":
      return "bg-[#EAE3FC] text-[#645C7F]";
    case "Est. Value":
      return "bg-teal-100 text-teal-800";
    case "+":
    case "#":
      return "bg-[#EEEEEE] text-[#AFAFAF] text-2xl";
    default:
      return "bg-white text-gray-700";
  }
};
