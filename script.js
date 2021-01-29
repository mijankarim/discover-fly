function handleTicketChange(ticket, isIncrease) {
    const ticketCount = getInputValue(ticket);

    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }

    document.getElementById(ticket + '-count').value = ticketNewCount;

    let ticketTotal = 0;

    if (ticket == 'firstClass') {
        ticketTotal = ticketNewCount * 150;
    }

    if (ticket == 'economy') {
        ticketTotal = ticketNewCount * 100;
    }
    document.getElementById(ticket + '-total').innerText = ticketTotal;
    calculateTotal();
}

function calculateTotal() {
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue('economy');

    const subTotalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('sub-total').innerText = subTotalPrice;

    const vat = subTotalPrice * (10 / 100);
    document.getElementById('vat').innerText = vat;
    document.getElementById('order-vat').innerText = vat;

    const total = subTotalPrice + vat;
    document.getElementById('total').innerText = total;
    document.getElementById('order-total').innerText = total;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

function handleSubmit() {
    document.getElementById('booking-form-container').style.display = 'none';
    document.getElementById('confirmation-area').style.display = 'block';
}


