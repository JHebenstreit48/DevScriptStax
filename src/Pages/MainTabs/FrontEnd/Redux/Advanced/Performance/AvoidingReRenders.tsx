import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
