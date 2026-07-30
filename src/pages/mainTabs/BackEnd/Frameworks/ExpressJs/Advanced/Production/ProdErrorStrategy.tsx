import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProdErrorStrategy = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Production/ProdErrorStrategy';

  return (
    <>
      <PageLayout>
        <PageTitle title="Prod Error Strategy" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProdErrorStrategy;
