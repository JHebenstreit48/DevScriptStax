import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
