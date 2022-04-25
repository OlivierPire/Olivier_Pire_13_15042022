import React from 'react';

const Transactions = () => {

    const transactions = [
        {
            id: 1,
            label: "Argent Bank Checking (x8349)",
            money: 2082.79,
            balance: "Available Balance"
        },
        {
            id: 2,
            label: "Argent Bank Checking (x8349)",
            money: 2082.79,
            balance: "Available Balance"
        },
        {
            id: 3,
            label: "Argent Bank Checking (x8349)",
            money: 2082.79,
            balance: "Available Balance"
        }
    ]

    return (
        <div>
            {transactions.map((a) => 
                <section key={a.id} className='account'>
                    <div className="account-content-wrapper">
                        <h3 className="account-title">{a.label}</h3>
                        <p className="account-amount">${a.money}</p>
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