import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SingleVsSplitOrigin = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/Deployment/SingleVsSplitOrigin';

  return (
    <>
      <PageLayout>
        <PageTitle title="Single vs Split Origin" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SingleVsSplitOrigin;
