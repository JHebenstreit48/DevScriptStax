import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SourceGen = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/MetaAndAnno/SourceGen';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Source Gen" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SourceGen;
