import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
