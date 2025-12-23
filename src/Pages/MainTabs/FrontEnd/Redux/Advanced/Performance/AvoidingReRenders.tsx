import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AvoidingReRenders = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/Performance/AvoidingReRenders';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Avoiding Re-renders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AvoidingReRenders;
