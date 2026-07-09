import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReusableCommands = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/OrbsAndReuse/ReusableCommands';

  return (
    <>
      <PageLayout>
        <PageTitle title="Reusable Commands" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReusableCommands;
