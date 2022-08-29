function addToScreen(value){
    const operationSigns = ['*','+','-','/','.'];
    screen.value += value;
    if (operationSigns.includes(value)){
        var valorAnterior = screen.value.length - 2;
        if (operationSigns.includes(screen.value[valorAnterior])){
            screen.value = screen.value.substring(0, (screen.value.length - 2));
            screen.value = screen.value + value;
        }
    }
    switch (screen.value[0]){
        case '*':
            screen.value = '';
        case '/':
            screen.value = '';
        case '.':
            screen.value = '';
    }
}
function result(){
    screen.value = eval(screen.value);
}