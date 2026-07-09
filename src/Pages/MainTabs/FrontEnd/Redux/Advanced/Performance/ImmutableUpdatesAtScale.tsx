import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ImmutableUpdatesAtScale = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/Performance/ImmutableUpdatesAtScale';

  return (
    <>
      <PageLayout>
        <PageTitle title="Immutable Updates at Scale" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImmutableUpdatesAtScale;
