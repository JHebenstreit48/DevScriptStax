import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
