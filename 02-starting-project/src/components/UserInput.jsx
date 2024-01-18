export default function UserInput({onChange, userInput}) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Invesment</label>
                <input
                    type="number"
                    required
                    min={0}
                    value={userInput.initialInvestment}
                    onChange={(event) => onChange('initialInvestment', event.target.value)} />
            </p>
            <p>
                <label>Annual Invesment</label>
                <input
                    type="number"
                    required
                    min={0}
                    value={userInput.annualInvestment}
                    onChange={(event) => onChange('annualInvestment', event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input
                    type="number"
                    required
                    min={0}
                    value={userInput.expectedReturn}
                    onChange={(event) => onChange('expectedReturn', event.target.value)} />
            </p>
            <p>
                <label>Duration</label>
                <input
                    type="number"
                    required
                    min={0}
                    value={userInput.duration}
                    onChange={(event) => onChange('duration', event.target.value)} />
            </p>
        </div>
    </section>
}