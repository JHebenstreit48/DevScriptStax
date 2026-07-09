import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HigherOrder = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Functions/HigherOrder';

  return (
    <PageLayout>
      <PageTitle title="JavaScript - Higher-Order Functions" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default HigherOrder;