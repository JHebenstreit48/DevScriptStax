import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Transactions = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Basics/Data/Transactions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Transactions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Transactions;
