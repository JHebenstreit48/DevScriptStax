import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TxAOP = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/AOPAdvanced/TxAOP';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tx AOP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TxAOP;
