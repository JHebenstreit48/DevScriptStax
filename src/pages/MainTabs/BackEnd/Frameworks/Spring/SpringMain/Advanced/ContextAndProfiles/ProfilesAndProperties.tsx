import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProfilesAndProperties = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/ContextAndProfiles/ProfilesAndProperties';

  return (
    <>
      <PageLayout>
        <PageTitle title="Profiles & Properties" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProfilesAndProperties;
