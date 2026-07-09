import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Typedefs = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/Generics/Typedefs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Typedefs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Typedefs;
