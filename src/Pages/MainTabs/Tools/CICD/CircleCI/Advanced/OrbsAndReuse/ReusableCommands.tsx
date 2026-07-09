import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
