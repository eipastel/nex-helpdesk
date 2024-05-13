function getPriorityTranslated(priority) {
    let priorityTranslated;

    switch(priority) {
        case "high":
            priorityTranslated = "Alta";
            break;
        case "medium":
            priorityTranslated = "Média";
            break;
        case "low":
            priorityTranslated = "Baixa";
            break;
        case "Alta":
            priorityTranslated = "high";
            break;
        case "Média":
            priorityTranslated = "medium";
            break;
        case "Baixa":
            priorityTranslated = "low";
            break;
        default:
            priorityTranslated = "Baixa";
            break;    
    }

    return priorityTranslated;
}

export default { getPriorityTranslated }
