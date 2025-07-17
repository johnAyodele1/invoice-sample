import React from 'react';
import styles from './App.module.css';
import TrialBanner from './components/TrialBanner/TrialBanner';
import Header from './components/Header/Header';
import PageTitle from './components/PageTitle/PageTitle';
import PaymentOptionsBanner from './components/PaymentOptionsBanner/PaymentOptionsBanner';
import InvoiceTemplateBanner from './components/InvoiceTemplateBanner/InvoiceTemplateBanner';
import InvoiceForm from './components/InvoiceForm/InvoiceForm';
import InvoiceTable from './components/InvoiceTable/InvoiceTable';
import Summary from './components/Summary/Summary';
import SetupGuide from './components/SetupGuide/SetupGuide';

const App = () => {
    return (
        <div className={styles.app}>
            <TrialBanner />
            <Header />
            <main className={styles.main}>
                <PageTitle />
                <PaymentOptionsBanner />
                <InvoiceTemplateBanner />
                <InvoiceForm />
                <InvoiceTable />
                <Summary />
            </main>
            <SetupGuide />
        </div>
    );
};

export default App;
