import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TxAOP = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/AOPAdvanced/TxAOP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tx AOP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TxAOP;
