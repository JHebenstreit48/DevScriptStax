import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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