import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AvoidingReRenders = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/Performance/AvoidingReRenders';

  return (
    <>
      <PageLayout>
        <PageTitle title="Avoiding Re-renders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AvoidingReRenders;
