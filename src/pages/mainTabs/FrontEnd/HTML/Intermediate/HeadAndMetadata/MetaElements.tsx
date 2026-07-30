import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
