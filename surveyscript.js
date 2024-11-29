let currentStep = 0;
const steps = document.querySelectorAll('.survey-step');
const surveyContainer = document.getElementById('surveyContainer');
const surveyData = {
    features: []
};

function updateSurveyHeight() {
    const activeStep = document.querySelector('.survey-step.active');
    if (activeStep) {
        const stepHeight = activeStep.scrollHeight;
        surveyContainer.style.height = `${stepHeight + 40}px`;
    }
}

function showStep(step) {
    steps.forEach((s, index) => {
        s.classList.toggle('active', index === step);
    });
    currentStep = step;
    updateSurveyHeight();
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);
    } else {
        showStep(steps.length - 1);
    }
}

function prevStep() {
    if (currentStep > 0) {
        showStep(currentStep - 1);
    }
}

function selectOption(element, questionKey, value) {
    const options = element.parentElement.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));

    element.classList.add('selected');
    surveyData[questionKey] = value;

}

function toggleOption(element, questionKey, value) {
    element.classList.toggle('selected');

    if (!surveyData[questionKey]) {
        surveyData[questionKey] = [];
    }

    if (element.classList.contains('selected')) {
        surveyData[questionKey].push(value);
    } else {
        surveyData[questionKey] = surveyData[questionKey].filter(item => item !== value);
    }

}

function saveInput(questionKey, value) {
    surveyData[questionKey] = value;
}



function submitSurvey() {
    sessionStorage.setItem("surveyResult", JSON.stringify(surveyData));
}

updateSurveyHeight();
window.addEventListener('resize', updateSurveyHeight);
