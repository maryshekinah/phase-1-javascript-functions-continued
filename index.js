    function saturdayFun(program = 'roller-skate'){
    return (`This Saturday, I want to ${program}!`);
}
function mondayWork(program= 'go to the office'){
    return `This Monday, I will ${program}.`;
}
function wrapAdjective(action= "*"){
    return function(adjective = 'slow'){
        return `You are ${action}${adjective}${action}!`;
    }
}