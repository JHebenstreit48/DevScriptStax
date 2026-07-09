import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
