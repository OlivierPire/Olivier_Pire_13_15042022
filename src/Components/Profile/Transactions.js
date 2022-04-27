import React from 'react';

const Transactions = () => {
    const internationalNumberFormat = new Intl.NumberFormat('en-US')
    
    const transactions = [
        {
            id: 1,
            label: "Argent Bank Checking (x8349)",
            money: 2082.79,
            balance: "Available Balance"
        },
        {
            id: 2,
            label: "Argent Bank Savings (x67124)",
            money: 10928.42,
            balance: "Available Balance"
        },
        {
            id: 3,
            label: "Argent Bank Checking (x8349)",
            money: 184.30,
            balance: "Current Balance"
        }
    ]

    return (
        <div className='transactions-block'>
            {transactions.map((a) => 
                <section key={a.id} className='account'>
                    <div className="account-content-wrapper">
                        <h3 className="account-title">{a.label}</h3>
                        <p className="account-amount">${internationalNumberFormat.format(a.money)}</p>
                        <p className="account-amount-description">{a.balance}</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Transactions;