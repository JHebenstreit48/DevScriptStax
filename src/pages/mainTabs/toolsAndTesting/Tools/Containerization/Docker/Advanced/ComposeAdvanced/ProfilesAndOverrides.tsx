import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProfilesAndOverrides = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/ComposeAdvanced/ProfilesAndOverrides';

  return (
    <>
      <PageLayout>
        <PageTitle title="Profiles & Overrides" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilesAndOverrides;
