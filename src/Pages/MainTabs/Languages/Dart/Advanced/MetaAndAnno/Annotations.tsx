import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Annotations = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/MetaAndAnno/Annotations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Annotations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Annotations;
