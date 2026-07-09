import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CryptoBasics = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/Security/CryptoBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Crypto Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CryptoBasics;
