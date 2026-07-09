import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MetaElements = () => {
  const markdownFilePath = 'FrontEnd/HTML/Intermediate/HeadAndMetadata/Meta';

  return (
    <>
      <PageLayout>
        <PageTitle title="Meta Elements" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MetaElements;
