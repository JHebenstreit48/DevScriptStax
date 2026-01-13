import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MetaElements = () => {
  const markdownFilePath = 'FrontEnd/HTML/Intermediate/HeadAndMetadata/MetaElements';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Meta Elements" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MetaElements;
