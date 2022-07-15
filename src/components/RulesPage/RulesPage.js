import './RulesPage.css';

function RulesPage() {
    return (
        <>
            <h2 className="sub-title">Rules</h2>
            <p className="text-holder rules-holder">
                Bulls and Cows is a 2 player game. One player thinks of a number (the computer in this case), while the other player tries to guess it. The number to be guessed must be a 4 digit number, using only digits from 1 - 9, each digit atmost once. e.g. 1234 is valid, 0123 is not valid, 9877 is not valid, 9876 is valid.
            </p>
        </>
    );
}

export default RulesPage;
