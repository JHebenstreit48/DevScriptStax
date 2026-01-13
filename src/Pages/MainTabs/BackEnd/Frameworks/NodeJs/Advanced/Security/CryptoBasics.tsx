import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CryptoBasics = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/Security/CryptoBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Crypto Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CryptoBasics;
